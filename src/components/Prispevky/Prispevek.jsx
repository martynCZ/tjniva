import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Prispevek = ({test}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchFirstPost = async () => {
            try {
                const response = await axios.get('https://tjniva.cz/wp-json/wp/v2/posts?_fields=id,title,featured_media,contenthttps://tjniva.cz/wp-json/wp/v2/posts?_fields=id,title,featured_media,content&per_page=4');
                const postById = response.data[test];
                const featuredMediaId = postById.featured_media;               
                if (featuredMediaId) {
                    const mediaResponse = await axios.get(`https://tjniva.cz/wp-json/wp/v2/media/${featuredMediaId}`);
                    const mediaData = mediaResponse.data;
                    const thumbnailUrl = mediaData.media_details.sizes['fusion-600'].source_url;
                    postById.thumbnailUrl = thumbnailUrl;
                  }
                setPost(postById);
            } catch (error) {
                console.error('Error fetching first post:', error);
            }
        };

        fetchFirstPost();
    }, []);

    if (!post) {
        return <div>Loading...</div>;
    }
    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>?/gm, '');
    };

    const excerpt = (text, pocet) => {
        return text.substring(0, pocet) + " [...]";
    }
    return (
        <div className='flex sm:flex-row flex-col justify-center sm:items-center md:items-start gap-4 mb-14'>           
           <div className="flex-1 sm:max-w-[30rem] max-h-full h-[19rem] overflow-hidden">
                <img
                    src={post.thumbnailUrl}
                    className="w-full h-full object-cover"
                    alt="Thumbnail"
                />
            </div>
            <div className='flex-1'>
                <h2 className='text-[32px] font-black mb-6 hover:text-main transition-colors duration-300 cursor-pointer'>{post.title.rendered}</h2>
                <p className='text-xl leading-10 hidden xl:block'>
                     {excerpt(stripHtmlTags(post.content.rendered), 250)}
                </p>
                <p className='text-xl leading-10 xl:hidden'>
                     {excerpt(stripHtmlTags(post.content.rendered), 100)}
                </p>
            </div>
        </div>
    );
}

export default Prispevek;
