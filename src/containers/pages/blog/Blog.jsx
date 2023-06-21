import BlogList from "components/blog/BlogList";
import Layout from "hocs/layout/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { get_author_blog_list, get_author_blog_list_page,  } from "redux/actions/blog/blog";
import { get_categories } from "redux/actions/categories/categories";


function Blog({
    get_author_blog_list,
    get_author_blog_list_page,
    posts,
    count,
    next,
    previous,
    get_categories,
    categories
}){

    useEffect(()=>{
        get_author_blog_list()
        get_categories()
    },[])

    return(
        <Layout>
            <Helmet>
                <title>MG Seguridad Privada | Admin Blog</title>
                <meta name="description" content="Sección de blog de Marketing"/> 
                <meta name="keywords" content='blog de MG Seguridad Privada, seguridad privada blog'/>
                <meta name="robots" content='all'/>
                <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/"/>
                <meta name="author" content="Seguridad"/>
                <meta name="publisher" content="Franco Loto"/>

                {/* Social Media Tags */}
                <meta property='og:title' content='MG Seguridad Privada'/>
                <meta property='og:description' content='Sección de blog de Marketing'/>
                <meta property='og:url' content='https://www.mgseguridadprivada.com.ar/'/>
                <meta property='og:image' content='https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg'/>

                <meta name="twitter:title" content='MG Seguridad Privada' />
                <meta
                    name="twitter:decription"
                    description='Admin Blog MG Seguriad Privada'
                />
                <meta name="twitter:image" content="https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg"/>
                <meta name="twitter:card" content="summary_large_image"/>

            </Helmet>
            <BlogList
            posts={posts&&posts} 
            get_blog_list_page={get_author_blog_list_page} 
            count={count&&count}/>
        </Layout>
    )
}

const mapStateProps=state=>({
    posts: state.blog.author_blog_list,
    categories: state.categories.categories,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous 
})

export default connect(mapStateProps,{
    get_author_blog_list,
    get_author_blog_list_page,
    get_categories
}) (Blog)