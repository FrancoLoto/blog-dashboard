import axios from "axios"
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
                <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/"/>
                <meta name="author" content="Seguridad"/>
                <meta name="publisher" content="Franco Loto"/>
            </Helmet>
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-4">
                <h3 className="text-3xl font-medium leading-6 text-gray-900">Blog</h3>
                <p className="mt-3 text-lg text-gray-500">
                    Crear, editar o eliminar una publicación
                </p>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0">
                <button
                    onClick={()=>{
                        const config = {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': `JWT ${localStorage.getItem('access')}`
                            }
                        };

                        const body = JSON.stringify({

                        })

                        const fetchData = async()=>{
                            try{
                                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/create`,body,config)
                            
                                if(res.status === 200){
                                    get_author_blog_list()
                                }
                            }catch(err){
                                alert('Error al crear post')
                            }
                        }
                        fetchData()
                    }}
                    className="relative inline-flex items-center rounded-md border border-transparent bg-celeste px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-celeste-dos focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Crear Post
                </button>
                </div>
            </div>
            </div>
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