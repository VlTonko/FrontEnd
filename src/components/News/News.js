import React, {useContext} from 'react';
import {RegistrContext} from "../../RegistrContext";
import Article from "../Article/Article";
import {StNews} from "./StNews";


const News = () => {
    const { news } = useContext(RegistrContext);

    return (
        <StNews>
            {news.map(item => (
                <Article
                    image={item.urlToImage}
                    title = {item.title}
                    webTitle = {item.content}
                    webUrl = {item.url}
                    data = {item.publishedAt}
                />
            ))}
        </StNews>
    );
};

export default News;
