import Newsitem from "./Newsitem";
import React from "react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";


export default function News(props) {

  function capitlizeText(word) 
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}
  {document.title = capitlizeText(props.category) + " - NewsMonkey"}

  const [article, setarticle] = useState([
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "\"Cow-ed By Jokes?\" Shashi Tharoor As Centre Withdraws 'Cow Hug Day' Appeal - NDTV",
      description:
        "A government body yesterday withdrew its appeal asking people to hug a cow on Valentine's Day amid a flood of jokes and memes on social media.",
      url: "https://www.ndtv.com/india-news/cow-ed-by-jokes-shashi-tharoor-as-centre-withdraws-cow-hug-day-appeal-3773299",
      urlToImage:
        "https://c.ndtvimg.com/2022-10/r4vftnoo_shashi-tharoor-congress-polls-650_625x300_19_October_22.jpg",
      publishedAt: "2023-02-11T07:52:23Z",
      content:
        "Shashi Tharoor made the joke in a tweet.\r\nNew Delhi: A government body yesterday withdrew its appeal asking people to hug a cow on Valentine's Day amid a flood of jokes and memes on social media. Con… [+1443 chars]",
    },
  ]);
  const [author, setauthor] = useState(null)
  const [publishedAt, setpublishedAt] = useState(null)
  const [loadingstate, setloading] = useState(false);
  const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(20)
const [source, setsource] = useState(null)
  const getData = () => {
        setloading(true);
  
        fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ee7167636ab94f22a5c0d7cfc628d8ee&pageSize=${props.pageSize}`
    )
      .then((res) => res.json())
      .then((res) => {
        let parsedData = res;
        let ans = parsedData.articles;
        console.log(ans);
        settotalResults(parsedData.totalResults);
        setarticle(ans);
        setloading(false);
        setauthor(parsedData.author);
        setpublishedAt(parsedData.publishedAt);
        setsource(parsedData.source.name);
        // console.log(parsedData);
      });
  
  };
  
  useEffect(() => {
    getData();
  }, []);


  let HandleNextClick = () => {

        if (Math.ceil((totalResults)/props.pageSize)>page)
        {
        // console.log("nxt");
  const getData = () => {
        setloading(true);  
  
        fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ee7167636ab94f22a5c0d7cfc628d8ee&page=${page + 1}&pageSize=${props.pageSize}`
    )
      .then((res) => res.json())
      .then((res) => {
        let parsedData = res;
        let ans = parsedData.articles;
        console.log(ans);
        setarticle(ans);
        setauthor(parsedData.author);
        setpublishedAt(parsedData.publishedAt); 
        setsource(parsedData.source.name);
});
      setpage(page+1)
      setloading(false);
      
  };
  
  
getData();
        }
}
let HandlePrevClick = () => {
//   console.log("prv");

  
  const getData = () => {
        setloading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ee7167636ab94f22a5c0d7cfc628d8ee&page=${page-1}&pageSize=${props.pageSize}`
    )
      .then((res) => res.json())
      .then((res) => {
        let parsedData = res;
        let ans = parsedData.articles;
        console.log(ans);
        setarticle(ans);
        setauthor(parsedData.author);
      setpublishedAt(parsedData.publishedAt);
      setsource(parsedData.source.name);   
         
});
      setpage(page-1)
      setloading(false);
      
  };
getData();
}


  return (
    <div className="container my-3">
       
      <h2 className="text-center"> NewsMonkey - Top {capitlizeText(props.category)} Headlines  </h2>
      {loadingstate==true ?<Spinner/>:""}
      <div className="row md-4">
        {loadingstate==false && article.map((element) => {
          return (
            <div className="col md-3 my-3" key={element.url}>
              <Newsitem
                
                url={element.url}
                title={element.title}
                desc={element.description}
                Imageurl={element.urlToImage}
                author = {element.author}
                publishedAt = {element.publishedAt}
                srcname = {element.source.name}
              />
            </div>
          );
        })}
      </div>
      <div className="container my-3 d-flex justify-content-between">
<button type="button" disabled={page<2} className="btn btn-dark" onClick={HandlePrevClick}> &larr; Previous</button>

<button type="button" disabled={page>=Math.ceil((totalResults)/props.pageSize)}className="btn btn-dark" onClick={HandleNextClick} >  Next &rarr;</button>
</div>
    </div>
  );
}
