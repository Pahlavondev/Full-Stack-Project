import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
  getArticlesDetailStart,
  getArticlesDetailSuccess,
  getArticlesDetailFailure,
} from "../slice/article";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticlesDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticlesDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticlesDetailFailure());
      }
    };
    getArticleDetail();
  }, [slug]);

  return <div>slug: {slug}</div>;
}

export default ArticleDetail;
