import React, { Component, useState , useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

const News= (props)=> {
    // constructor(){
    //     super()
    //     this.state = {
    //         articles : [],
    //         page : 1,
    //         loading : true,
    //         pageSize : 6,
    //         // totalResults : 0
    //     }
    // }
    const[articles,setArticles] = useState([])
    const[page,setPage] = useState(1)
    const[loading,setLoading] = useState(true)
    // const[pageSize,setPageSize] = useState(6)
    const[totalResults,setTotalResults] = useState(0)
    const upadateNews = async ()=>{
        props.setProgress(10)
        const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=21f3ca9d2a5b4249999aff0f9f7cdfc9&page=${page}&pageSize=6`
        // this.setState({
        //     loading: true
        // })
        setLoading(true)
        const data = await fetch(URL)
        const parseddata = await data.json()
        props.setProgress(50)
        // this.setState({
        //     articles : parseddata.articles,
        //     totalResults : parseddata.totalResults,
        //     loading : false,
        // })
        setArticles(parseddata.articles);
        setTotalResults(parseddata.totalResults);
        setLoading(false)
        props.setProgress(100)
    }
    // async componentDidMount(){
        // const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.newsapi}&page=${this.state.page}`
        // this.setState({
        //     loading: true
        // })
        // const data = await fetch(URL)
        // const parseddata = await data.json()
        // this.setState({
        //     articles : parseddata.articles,
        //     totalResults : parseddata.totalResults,
        //     loading : false
        // })
    //     this.upadateNews()
    // }
    useEffect(()=>{
        document.title = `NewsMonkey | ${props.category}`
        upadateNews()
    },[])
    const handlePrev = async ()=>{
        // const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.newsapi}&page=${this.state.page -1}`
        // this.setState({
        //     loading: true
        // })
        // const data = await fetch(URL)
        // const parseddata = await data.json()
        // this.setState({
        //     articles : parseddata.articles,
        //     page : this.state.page - 1,
        //     totalResults : parseddata.totalResults,
        //     loading : false
        // })
        // this.setState({
        //     page : --this.state.page 
        // })
        setPage(page-1)
        upadateNews()
    }
    const handleNext = async ()=>{
        // if(this.state.page > Math.ceil(this.state.totalResults/20)-1){

        // }else{
        //     const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.newsapi}&page=${this.state.page +1}`
        //     this.setState({
        //         loading: true
        //     })
        // const data = await fetch(URL)
        // const parseddata = await data.json()
        // this.setState({
        //     articles : parseddata.articles,
        //     page : this.state.page + 1,
        //     totalResults : parseddata.totalResults,
        //     loading : false
        // })
        // }
        // this.setState({
        //     page : ++this.state.page 
        // })
        setPage(page+1)
        upadateNews()
    }
    // fetchMoreData = async ()=>{
    //     this.setState({
    //             page : this.state.page + 1
    //     })
    //     const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.newsapi}&page=${this.state.page}&pageSize=${this.state.pageSize}`
    //     this.setState({
    //         loading: true
    //     })
    //     const data = await fetch(URL)
    //     const parseddata = await data.json()
    //     this.setState({
    //         articles : this.state.articles.concat(parseddata.articles),
    //         totalResults : parseddata.totalResults,
    //         loading : false,
    //     })
    // }
    return (
      <div>
        <div className="container my-3">
            <h2 style={{textAlign : 'center' , paddingBottom : '1rem'}}>Top {props.category} Headlines</h2>
            {loading && <Spinner/>}
            {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        > */}
            <div className="row">
                {!loading && articles.map(element=>{
                    return <div className="col-md-4">
                        <Newsitem title={element.title.slice(0,50)} description={!element.description?"Hindenburg Research said on Wednesday it held short positions in Indias Adani Group, accusing the conglomerate of improper extensive use of entities set up in offshore tax havens and expressing concern about high debt levels.":element.description} imgUrl={!element.urlToImage?"https://www.reuters.com/resizer/byeJxWduIJaVXaRjyoYx77F8kaw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IQLIQWA35FOS7MMEUXWV5R2J3Y.jpg":element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} />
                    </div>
                })}
            </div>
            {/* </InfiniteScroll> */}
        </div>
        {!loading && <div className="container my-4 d-flex justify-content-between">
            <button disabled={page <=1} className="btn btn-success" onClick={handlePrev}>&larr;Previous</button>
            <button disabled={page > Math.ceil(totalResults/20)-1} className="btn btn-success" onClick={handleNext}>Next&rarr;</button>
        </div>}
      </div>
    )
}
export default News