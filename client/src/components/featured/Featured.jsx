import useFetch from "../../hooks/useFetch.js";
import "./featured.css";

const Featured = () => {
  const {data, loading, error} = useFetch("/hotels/countByCity?cities=Karaganda,Astana,Almaty")

  console.log(loading)
  console.log(data)
  console.log(loading)

  return (
    <div className="featured">
      {loading ? (
        "Loading, wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://tripplanet.ru/wp-content/uploads/asia/kazakhstan/karaganda/dostoprimechatelnosti-karagandy.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Karaganda</h1>
              <h2>{data[0]} hotels</h2>
            </div>
          </div>
          
          <div className="featuredItem">
            <img
              src="https://all.accor.com/magazine/imagerie/1-619b.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Astana</h1>
              <h2>{data[1]} hotels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://caspiannews.com/media/caspian_news/all_original_photos/1561729676_1723707_1561729671_2614951yotxmgm2tf21.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Almaty</h1>
              <h2>{data[2]} hotels</h2>
            </div>
          </div>
        </>)}
    </div>
  );
};

export default Featured;
