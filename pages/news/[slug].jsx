import { Footer, Navbar } from '@/components';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import DefaultThumb from '../../images/default-news.jpg';

const News = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/v1/web/news');

      const data = await res.data.data;

      setLatestNews(data);
    };

    getData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container px-24 mt-[5rem]">
        <div className="grid grid-cols-[75%_auto] gap-4">
          <div>
            <div className="border rounded-md py-4 px-2">
              <div>
                <Image src={DefaultThumb} className="h-[500px]" />
              </div>
              <div className="py-2">
                <p className="text-lg font-semibold mb-2">Author</p>
                <p className="mb-2">Date</p>
                <p className="text-3xl mb-2 font-semibold">Title News</p>
              </div>
              <div>
                <p className="text-justify mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus laudantium omnis at minima reprehenderit officiis
                  enim impedit! Veniam ex assumenda voluptates et ratione nemo
                  non, reiciendis maiores placeat architecto voluptate, mollitia
                  amet nulla quo unde consequatur omnis cum atque ad praesentium
                  totam, quidem consectetur! Atque nemo hic ipsum delectus ab
                  repudiandae repellendus quisquam illo, suscipit perspiciatis
                  temporibus accusamus? Temporibus, dicta libero excepturi
                  deserunt deleniti incidunt veniam vero, quod nihil atque
                  inventore, ipsum totam quam debitis maxime est eum doloribus
                  blanditiis nesciunt! Accusamus culpa adipisci, aliquam
                  distinctio tenetur rem et voluptate illo eveniet debitis
                  sapiente vel sequi! Dolor hic dolorem tempore.
                </p>
                <p className="text-justify mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium officia animi cupiditate expedita hic quod ipsam
                  rem excepturi dolor perspiciatis. Inventore nihil quo impedit,
                  sunt deserunt consectetur hic ratione nemo, illo beatae
                  voluptatem voluptates perspiciatis et odit neque. Aliquam
                  optio molestias voluptatem architecto repellendus minus ullam
                  ducimus! Itaque ad tenetur quis ea id similique vero aut
                  recusandae labore facere. Quas dolorem reprehenderit quo
                  libero, tenetur assumenda perferendis, ad consequuntur dolore
                  id beatae voluptatem, velit minima commodi! Sit, odio porro.
                  Ipsam maxime beatae, at qui enim distinctio quas libero sed
                  doloribus numquam, assumenda nostrum tenetur optio nobis
                  dolore, animi hic inventore?
                </p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis culpa nemo, corrupti rem soluta, vel dolores
                  voluptatem voluptatum ea nam expedita ipsam. Doloribus earum
                  laudantium architecto voluptatum. Quasi voluptate, aut
                  similique unde ipsum, corrupti deserunt provident optio culpa
                  sequi soluta quod eius odit doloremque nostrum adipisci? In
                  nemo soluta tempore perferendis? Quis, consequatur suscipit
                  veniam assumenda dolores laborum similique, consequuntur optio
                  iusto in ratione. Architecto repellendus voluptate deserunt
                  culpa eligendi. Expedita adipisci ea recusandae doloribus
                  laudantium est iure rerum quia vitae velit atque
                  necessitatibus libero, aliquam, error sit alias voluptatibus
                  dolorem voluptate provident blanditiis optio aspernatur nemo
                  vero minus! Voluptatum veritatis laudantium facere porro ipsum
                  voluptas, impedit nam ab deserunt possimus eum. Corporis unde
                  doloribus quidem aut, facilis, tempore vitae officiis deleniti
                  amet saepe modi quaerat consequuntur est et. Libero esse et
                  iusto. Deleniti obcaecati inventore eaque architecto
                  aspernatur ipsam fuga, sint temporibus quam deserunt mollitia
                  a optio quo totam.
                </p>
              </div>
            </div>
          </div>
          <div className="latest-news">
            <div className="border rounded-md p-2">
              <p className="border-b-2 text-xl">Berita Terbaru</p>
              <div className="px-2 py-4">
                {latestNews.map(({ title, thumbnail, slug }, x) => (
                  <Link
                    href={'#'}
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

export default News;
