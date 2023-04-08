
async function dynamicPaths() {

    let url =  `https://codingchaska.up.railway.app/api/v1/short-tutorial/short-tuts/?author=&tags=30`;
    // console.log(data);
    let res = await  fetch(url);
    // console.log(res)
    let data1 = await res.json();
    // console.log(data1);
    let blogs = data1.results; 

    let BASE_URL = "https://www.decorateghar.com";
    
    const paths = blogs.map( blog => `${BASE_URL}/blog/${blog.slug}`)
    return paths
}




export default dynamicPaths;