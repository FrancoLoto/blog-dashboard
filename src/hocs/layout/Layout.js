import { connect } from "react-redux"
import { motion } from 'framer-motion'


function Layout({children}){
    return(
        <motion.div
        initial={{opacity: 0, transition: {duration: 0.3}}}
        animate={{opacity: 1, transition: {duration: 0.3}}}
        exit={{opacity: 0, transition: {duration: 0.3}}}>
            {children}
        </motion.div>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

}) (Layout)