import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { PortableText } from '../../lib/sanity';

const serializers = {
  container: (props) => {
    return (<div className='w-64'>
      {props}
    </div>);
  }
}


export default function ArticleBody({ content }) {
  return (
    <div className='flex flex-col'>
      <PortableText blocks={content} />
      {/* <BlockContent blocks={content} className={markdownStyles.markdown} 
      serializers={serializers}/> */}
    </div>
  );
}
