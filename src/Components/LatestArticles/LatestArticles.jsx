import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Utils/SectionTitle";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("../../../public/Blog.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="container mx-auto py-4 md:py-12 px-2">
        <SectionTitle title={'Latest Articles'}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.slice(0,5).map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4 border-t">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.summary}</p>
            <p className="text-gray-500">Published on {article.date}</p>
            <Link to={article.link} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
