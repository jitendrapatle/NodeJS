exports.pagenotfound = (req,res,next)=>{
    // res.status(404).sendFile(path.join(rootDir, 'views','404-not-found.html'))
    res.status(404).render('404', {pageTitle: "Page not found", currentPage:'404'})
}