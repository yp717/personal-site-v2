import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";
import LegoYannisFront from '../images/LEGOs/lego-yannis-front.svg';
import RecentProjects from '../components/recentProjects';
import RecentBlogs from '../components/recentBlogs';

const IndexPage = () => { 
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />     
      <Layout style={{zIndex: '99'}}>
        <div className="row container margin-30-t">
          <div className="col-xs-12 text-align-center pad-10-lr margin-30-b">
              <div>
                {/* <LegoSection/> */}
                <img 
                  src={LegoYannisFront} 
                  style={{height: '24vh', width: '100%'}} 
                  alt="lego-icon-front"
                />
                  <p className="is-java-green-text greeting-text text-align-center">
                    Hi, my name is
                  </p>         
                  <h1 className="is-background-blue-text text-align-center" style={{ fontSize: '2.8em' }}>Yannis Panagis</h1>
                  <h2 className="hero-tagline-text is-background-blue-text text-align-center">
                    {/* <ReactRotatingText items={['Engineer.', 'Designer.', 'Developer.', 'Student.']} style={{animationIterationCount: 1}} />  */}
                    Engineer. Designer. Developer. Student.
                    </h2>
                </div>
          </div>
        </div>
        <div className="page-section is-off-white-bg pad-5-tb">
          <div className="container row pad-4-b pad-5-lr">
            <div className="col-xs-12">
              <h2 className="is-background-blue-text margin-3-b margin-3-t">Recent Projects</h2>
            </div>
            <RecentProjects />
            <div className="col-xs-12">
              <h3 className="is-background-blue-text margin-3-b">
                <Link to="/blog" className="is-background-blue-text bold active underline">
                  See all Projects
                </Link>
              </h3>
            </div>
          </div>
        </div>          
        <div className="container row pad-5-tb pad-5-lr">
          <div className="col-xs-12">
            <h2 className="is-background-blue-text margin-4-b margin-5-t">Recent Posts</h2>
          </div>
          <RecentBlogs />
          <div className="col-xs-12">
            <h3 className="is-background-blue-text margin-3-b">
              <Link to="/blog" className="is-background-blue-text bold active underline">
                See all Blogs
              </Link>
            </h3>
          </div>
        </div>
      </Layout>
    </>
  );
}  

export default IndexPage;