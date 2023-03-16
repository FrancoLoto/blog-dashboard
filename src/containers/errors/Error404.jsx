import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";

function Error404(){
    return(
        <Layout>
            Error404
        </Layout>
    )
}
const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Error404)