import moment from "moment"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function BlogCardHorizontal({data, index}){


    return(
        <li
        >
              <Link to={`/blog/${data.slug}`}
                onMouseEnter={()=>{
                    const title = document.getElementById(`title`+data.id)
                    title.classList.add('text-indigo-500')
                    const img = document.getElementById(index)
                    img.classList.add('object-fill')
                }}
                onMouseLeave={()=>{
                    const title = document.getElementById(`title`+data.id)
                    title.classList.remove('text-indigo-500')
                    const img = document.getElementById(index)
                    img.classList.remove('object-fill')
                }} 
                className="block relative hover:shadow-2xl rounded-lg transition duration-300 ease-in-out">
                <div className="flex items-center my-10">
                  <div className="lg:flex min-w-0 lg:flex-1 items-center">
                    <figure className="lg:flex-shrink-0">
                      <img id={index} className="h-64 lg:w-96 w-full object-cover rounded-lg" src={data.thumbnail} alt="" />
                    </figure>
                    <div className="min-w-0 flex-1 px-8 p-4">
                        <p id={`title`+data.id} className="lg:mt-0 lg:absolute top-4 text-2xl pb-4 font-semibold transition duration-300 ease-in-out leading-8">
                            {data.title.length > 100 ? data.title.slice(0,99):data.title}
                        </p>
                        <div className="lg:absolute lg:top-28">
                            <span className="hover:text-indigo-500 mt-2 font-medium text-sm"><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
                            <span className="mt-2 font-medium text-sm mx-1">{moment(data.published).format('LL')}</span> &middot;
                            <span className="mt-2 font-medium text-sm mx-1">{data.time_read} min lectura</span>
                            <p className="mt-4 text-lg font-regular text-gray-800 leading-8">
                            {data.description}
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
    )
}
export default BlogCardHorizontal