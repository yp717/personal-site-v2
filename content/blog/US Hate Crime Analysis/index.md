---
title: Using Data Science to analyze US Hate Crime Distributions
date: 2018-08-15
thumbnail: "./thumbnail.png"
hero: "./hero.png"
tags: ['data science', 'hate crimes', 'r-programming']
type: 'blog'
description: A brief analysis of hate crimes and their distribution in the United States, shortly after the 2016 election
---

This is an exercise to pose a research question using data science techniques. The following explains the relevance of the topic, describes the statistical methodology used to answer the question and present new findings. This project is loosely structured as an introduction, a survey of related work, methods, data and useful summaries, results and conclusions.

Only ten days after the 2016 election, more than 900 hate crime incidents were reported to the Southern Poverty Law Center. This averages out to approximately 90 incidents per day, while the average number of incidents per day based on data collected between 2010 and 2015 indicated an average of only 16 incidents per day. This significant difference before and after the election raises the question whether there were more hate crime incidents after the 2016 election. However, as prior research conducted by the FiveThirtyEight proposes, there are several limitations in the data available so it is not possible to definitively determine whether hate crime rates have increased.

Instead, this research question examines which factor in the given data is the best predictor of hate crime rates across the states in the United States and how hate crimes vary geographically by state.

Previous analysis has proposed that the best predictor of hate crimes and incidents is income inequality. For the purposes of this investigation, several factors will be evaluated to determine whether there is a statistically significant relationship between variables such as median house income, the share of the population that is unemployed, the share of the population that has a high school degree, and other factors such as the Gini index and the share of 2016 U.S. presidential voters who voted for Donald Trump.

The sources for the data set being used for this analysis are the FBI and the Southern Poverty Law Center. While these particular data sources can be considered reliable sources of information several problems arise when considering the sources of the data being used for this analysis. Firstly, the data provided by the federal government uses information that agencies voluntarily report to the FBI and so they do not have any systematic method for tracking hate crimes. The federal government data also only includes information regarding to prosecutable incidents which do not represent all hate crimes as several offenses that are not prosecutable have been omitted such as white nationalist recruitment distribution.

Secondly, the data set is not entirely complete and as the initial visual plots included below demonstrate, some states, such as Hawaii, are missing from the database. The limitation that arises when using data provided by the SPLC is that it uses reputable media accounts and personal accounts or reports to assess incidents and further that there is no data available by the SPLC before the election in 2016. Both of these sources also include a bias because they are based on information obtained by voluntary submission so it may not be truly or completely representative of the true situation. The SPLC data does however have the advantage of including data on both prosecutable and non-prosecutable hate incidents, though previous related work has also proposed that an awareness bias may also skew the data as it is self-reported and awareness of hate crimes has changed since the 2016 Presidential election.

## Research Question

Which factor in the given data is the best predictor of hate crime rates across the states in the United States and how do hate crimes vary geographically by state?

## The Data Set

## Loading the Data Set

```{r}
## install.packages("fivethirtyeight")
library(fivethirtyeight)
library(tidyverse)
library(knitr)
library(ggplot2)
require(fivethirtyeight)
data(hate_crimes, package = "fivethirtyeight")
## ?hate_crimes
head(hate_crimes)
```

```{r}
summary(hate_crimes)
```

## Visual plots showing hate crime incidents pre- and post- of the 2016 US Presidential Election

```{r}
## install.packages("usmap")
library(usmap)
require(usmap)
## general syntax for making maps by us state to use in your visualizations section
usmap::plot_usmap(data = hate_crimes, values = "hate_crimes_per_100k_splc", lines = "red") + 
  scale_fill_continuous(
    low = "white", high = "red", name = "Post Election Hate Incident Rates, 2016", label = scales::comma
  ) + theme(legend.position = "right")
usmap::plot_usmap(data = hate_crimes, values = "avg_hatecrimes_per_100k_fbi", lines = "red") + 
  scale_fill_continuous(
    low = "white", high = "red", name = "Pre Election Hate Incident Rates", label = scales::comma
  ) + theme(legend.position = "right")
```

The visual plots above visualize the change in pre and post election hate incident rates as there is a clear variation before and after for the states. The plots further demonstrate that hate incident rates are not uniformly distributed across the United States and different states have varying hate crime rates both before and after the 2016 Election. It is also important to note that these plots also clearly point out which data is missing from the data set from before and after the election. For example, there is no data available on Hawaii before the election and there is no data available on Hawaii, North Dakota, South Dakota, and Wyoming, which means that the data is also not fully representative of the entire population because of missing entries for some of the states.

```{r}
usmap::plot_usmap(data = hate_crimes, values = "median_house_inc", lines = "red") + 
  scale_fill_continuous(
    low = "white", high = "red", name = "Median House Income", label = scales::comma
  ) + theme(legend.position = "right")
# In this next plot we create a categorical variable of Trump support level (into three categories: low, medium and high) based on the numerical variable in the dataset of the proprotion of 2016 US presidential voters who voted for Donald Trump.
hate_crimes_alternate <- hate_crimes %>% 
  mutate(
    trump_support_level = cut_number(share_vote_trump, 3, labels=c("low", "medium", "high"))
    )
g1 <- ggplot(data=hate_crimes_alternate, mapping = aes(x=trump_support_level, y=hate_crimes_per_100k_splc))
g1 <- g1 + geom_boxplot() + labs(x= "Trump Support Level", y= "Post Election Hate Crimes per 100k", title= "Hate Crimes vs. Level of Trump Support")
g1
```

The data from the above combination of plots indicates that in the days following the 2016 US Presidential Election, areas with low income had an associated increase in hate crime rates. Furthermore, by looking at a summary of the values in the hate crimes data set it was possible to determine that the outlier in the low category of Trump Support Level for the post election Hate Crime Incident rate was Washington DC.

Both the relationship between the maps and the data above indicates that in the days following the 2016 US Presidential Election, areas with low income had an associated increase in hate crime rates. Furthermore, the outlier in the low category of Trump Support Level.

## Analysis and Linear Regression Testing

The analysis of this data set was started using the lm function to fit a simple  linear regression model, with ` avg_hatecrimes_per_100k_fbi` as the response and ` share_vote_trump`  as the predictor. The object returned by this function was then stored as `lm.fit`

```{r}
lm.fit <- lm(avg_hatecrimes_per_100k_fbi ~ share_vote_trump, data = hate_crimes)
```

The following 3 chunks of code output some basic information about the model such as the p-values and standard errors for the coefficients, as well as the $R^2$ statistic and F-statistic for the model.

```{r}
lm.fit
summary(lm.fit)
coef(lm.fit)
confint(lm.fit)
```

The confidence interval generated for the variable share_vote_trump is not particularly meaningful because the values are below zero at the 2.5th and 97.5th percentiles so this cannot be used as a particularly meaningful metric in this analysis.

```{r}
predict(lm.fit, data.frame(share_vote_trump = c(5, 10, 15)),
       interval = "confidence")
predict(lm.fit, data.frame(share_vote_trump = c(5, 10, 15)),
       interval = "prediction")
```

At a first glance, it is unclear why the intervals generated by the two functions above are different. The reason that the confidence interval and the prediction interval are different is because the confidence interval is a the range of plausible values for the **mean** of $y$, while the **prediction** interval gives the range of possible values for a single **new** value of $y$.

An alternative approach

```{r}
plot(hate_crimes$share_vote_trump, hate_crimes$avg_hatecrimes_per_100k_fbi)
abline(lm.fit)
plot(hate_crimes$share_vote_trump, hate_crimes$hate_crimes_per_100k_splc)
abline(lm.fit)
```

When making two basic scatter plots of the number of hate crimes before and after the 2016 election on the y-axis against the variable share_vote_trump on the x-axis, both the data provided by the FBI before the 2016 election and the data provided by the SPLC after the election suggest that as the share of voters for Trump increases the number of hate crimes per 100,000 decrease. However, further examination of the second plot of the SPLC data shows that the regression line included does not actually pass through any of the data points so there is not enough evidence at this stage whether or not there is a relationship between the share of trump voters and the number of hate incidents per 100k.

In order to further analyze the data we must consider the diagnostic plots, shown below.

```{r}
par(mfrow=c(2,2))
plot(lm.fit)
```

## So what do these plots actually tell us

As the QQ plot is a scatter plot created by plotting the two sets of quantiles against each other it demonstrates that both sets of quantiles came from the same distribution because they roughly follow a straight line. This plot suggests that it is plausible that there is a linear relationship between the variable share_trump_voters and the number of hate incidents per 100k.

The "residuals vs fitted" plot of the residual vs $\hat{y` shows a smoothed curve drawn through the plot in an attempt to help visualize patterns in the bi-variate data. However, this curve should be approximately a horizontal line because if the "usual" assumptions of the model are satisfied, particularly, linearity, independence of the error terms epsilon, and constant variance of epsilon as a function of x, then the residuals should be unrelated to the fitted values. However, if they are not then it suggests a violation of one or more assumptions which means that one or more of the above assumptions has been violated.

The "Scale-location" can be interpreted similarly to the "residuals vs fitted" plot because the standardized residuals are the residuals divided by their estimated standard deviations and in a linear model the estimated standard deviation of the residuals depends on the value of x. Similarly, as this plot is also not a horizontal line it also suggests that that the data cannot be modelled by a linear regression, despite the initial plots that indicated a linear relationship previously.

The "Residuals vs. leverage" plots the values of the residuals against the leverage which measures the influence of each observation on the fit. The points with a high leverage shown pull the regression line more towards them than the other points and this is problematic in this particular case because the residual values for those points are high and this suggests that the point is both pulling the line toward it and that the model is still not fitting well. These points could be considered outliers for which the model is not appropriate because they skew the data.

Alternatively, the residuals can also be computed from a linear regression fit and the studentized residuals obtained by using the function rstudent() may be more interpretable because the studentized residuals standardise the residuals by diving by this estimated standard deviation.

```{r}
qplot(predict(lm.fit), residuals(lm.fit))
qplot(predict(lm.fit), rstudent(lm.fit))
```

The conclusion that can be made in our analysis so far is that alone, the share of trump voters is not a clear predictor of the number of hate crime incidents before or after the election, even though it is possible that there is a relationship there is not enough evidence to verify this based on this initial analysis.

The clearest way answer the research question as to which of the variables in the dataset is the best predictor of the number of hate crime incidents is to determine which predictors have the largest estimated coefficients if the relative magnitude is interpretable.

Which of the variables are statistically significant?

```{r}
lm.fit1 <- lm(avg_hatecrimes_per_100k_fbi ~ . -state, data=hate_crimes)
summary(lm.fit1)
```

As shown above, only the number of hate crimes before the 2016 election and the Gini index are statistically significant predictors on their own of the number of hate crime incidents. The high statistical significance of the average number of hate crimes per 100k suggests that before as a predictor of the number of hate crime incidents after the election implies that the number of hate crime incidents has not changed with respect to state. It is, however, more interesting to evaluate the reason why the Gini index is a good predictor of the number of hate crime incidents.

```{r}
g2 <- ggplot(data=hate_crimes, mapping = aes(x=gini_index, y=hate_crimes_per_100k_splc))
g2 <- g2 + geom_point() + geom_smooth(method = "lm", se=FALSE)
g2 <- g2 + labs(x = "Gini Index for Income Inequality", y = "Post Election Hate Crimes Per 100k", title = "Hate Crimes vs. Income Inequality")
g2
```

The Gini coefficient is best interpreted as a measure of income or wealth dispersion, or in other words, income inequality. A value of 0 for the Gini index would indicate perfect equality and a value of 1 for the Gini index would indicate perfect inequality. The reason for this direct linear relationship proposed by the p-value and the graph above could be that income inequality is known to have a significant effect on violence in neighborhoods and communities in general, and as originally proposed by FiveThirtyEight's analysis, hate crimes can be considered a special case of a larger category of violence.

However, it is important to consider the limitations of this analysis because while there may be a statistically significant correlation in the data, correlation does not necessarily imply causation.

```{r}
lm.fit2 <- lm(hate_crimes_per_100k_splc ~ median_house_inc + gini_index -state, data=hate_crimes)
summary(lm.fit2)
```

This alternative regression shows that a combination of the variables median_house_inc and gini_index can provide an even better predictor of the proportion of hate crime incidents per 100k using the variable containing the data provided by the SPLC.

## Conclusion

The initial research on this subject by the SPLC has additionally proposed that "Socioeconomic drivers for hate incidents at the community level may differ from the state-level indicators that we identified here. Moreover, it is likely that neither data set is truly representative of hate incidents across the United States, and it’s possible that whether people report or don’t report these incidents is different among states." This means that the FBI and SPLC data sets may be mis-representative because the number of reported incidents may be under-reported in several states and so the data may not be truly representative of hate crime incidents across the United States, as initially proposed in the introduction of this analysis.

Despite these limitations, both data sets reveal that hate incidents aren’t uniformly distributed across the United States. In other words, a greater number of hate incidents were reported in some states (per 100,000 people) than in others — both according to the SPLC after the election and the FBI before it.

In conclusion, both data sets suggest that hate incidents are non-uniformly distributed across the United States with the highest number of hate incidents reported (per 100,000) in Washington D.C. and the smallest number of hate crime incidents in Wyoming.

With the information available it is unclear how the Trump presidency will affect future hate crime incident rates in the United States and whether or not there is a statistically significant difference in hate crime incident rates before and after the election. It is however clear that income disparity is the clearest socioeconomic predictor of hate crime incidents both before and after the election. There is potential for a significant change in these rates under the new administration if income inequality is to increase under Trump's administration as many publications such as the Economist and several economists have predicted.
