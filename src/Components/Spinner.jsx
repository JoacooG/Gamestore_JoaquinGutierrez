import React from "react";

const Spinner = () =>{
    return(
        <div style={styles.container}>
        <div class="preloader-wrapper large active">
        <div class="spinner-layer">
        <div class="circle-clipper left">
        <div class="circle"></div>
        </div><div class="gap-patch">
        <div class="circle"></div>
        </div><div class="circle-clipper right">
        <div class="circle"></div>
        </div>
        </div>
        </div>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alingItems: 'center'
    }
}
export default Spinner