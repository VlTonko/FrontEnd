import React, {useEffect, useContext} from 'react';
import URL_NEWS from "../../constants/urlnews";
import {RegistrContext} from "../../RegistrContext";
import News from '../News/News'
import axios from 'axios';

const Gardian = () => {
    const { news, addNews } = useContext(RegistrContext);
    useEffect(() => {queryNews();},[]);

    const queryNews = async () => {
        try {
            const {data} = await axios.get(`${URL_NEWS}`);
            addNews(data.articles);
            console.log(data.articles)
        } catch (error) {
            console.log('error');
        }
    };

    console.log(news)
    return (
        <div>
            <News/>
        </div>
    );
};

export default Gardian;