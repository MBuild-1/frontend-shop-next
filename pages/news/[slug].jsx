import { Footer, Navbar } from '@/components';
import { loadNews, loadNewsWithFilter } from '@/lib';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import DefaultThumb from '../../images/default-news.jpg';

export const getServerSideProps = async ({ query }) => {
  try {
    const { id } = query;

    const latestNews = await loadNews();
    const news = await loadNewsWithFilter(`${id}`);

    return {
      props: {
        latestNews,
        news,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const NewsWithFilter = props => {
  const { latestNews, news } = props;

  console.log(news);
  return (
    <>
      <Navbar />
      <div className="container px-24 mt-[5rem]">
        <div className="grid grid-cols-[75%_auto] gap-4">
          <div>
            <div className="border rounded-md py-4 px-2">
              <div>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_STORAGE_URL +
                    '/' +
                    news.thumbnail.replace('public/', '')
                  }
                  alt={news.title}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="py-2">
                <p className="text-lg font-semibold mb-2">Author</p>
                <p className="mb-2">{news.created_at}</p>
                <p className="text-3xl mb-2 font-semibold">{news.title}</p>
              </div>
              <div>
                <p className="text-justify mb-3">{news.body}</p>
              </div>
            </div>
          </div>
          <div className="latest-news">
            <div className="border rounded-md p-2">
              <p className="border-b-2 text-xl">Berita Terbaru</p>
              <div className="px-2 py-4">
                {latestNews.map(({ title, thumbnail, slug, id }, x) => (
                  <Link
                    href={`/news/${slug}?id=${id}`}
                    className="grid grid-cols-[40%_auto] gap-2 mb-4"
                    key={x}
                  >
                    <Image
                      src={
                        thumbnail
                          ? process.env.NEXT_PUBLIC_API_STORAGE_URL +
                            '/' +
                            thumbnail.replace('public/', '')
                          : DefaultThumb
                      }
                      width={100}
                      height={100}
                    />
                    <p className="text-xs">{title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsWithFilter;
