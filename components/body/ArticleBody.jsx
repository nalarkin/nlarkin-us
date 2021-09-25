import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { PortableText } from '../../lib/sanity';
import * as React from 'react';

const serializers = {
  // container: (props) => {
  //   return (<div className='w-64'>
  //     {props}
  //   </div>);
  // }
  types: {
     block: (props) => (
      <div className='mb-4 w-full text-xl font-serif'>
        {props.children}
      </div>
    ),

  }
 

}


export default function ArticleBody({ text }) {
  console.log(`text is ${JSON.stringify(text)}`)
  return (
    <div className=''>
      {/* <PortableText blocks={content} /> */}
      {/* <BlockContent blocks={content} className={markdownStyles.markdown} 
        serializers={serializers}/> */}
        <BlockContent blocks={text} serializers={serializers} />
    </div>
  );
}

// const BlockRenderer = (props) => {
//   const {style = 'normal'} = props.node

//   if (/^h\d/.test(style)) {
//     const level = style.replace(/[^\d]/g, '')
//     return React.createElement(style, {className: `heading-${level}`}, props.children)
//   }

//   if (style === 'normal') {
//     return <div className='bg-blue-500 flex flex-col'>{props.children.map(element => <div key=''>{element}</div>)}</div>
//     // return React.createElement('div', {className: 'bg-blue-500 flex '}, props.children) ;
//   }

//   if (style === 'blockquote') {
//     return <blockquote>- {props.children}</blockquote>
//   }

//   // Fall back to default handling
//   return BlockContent.defaultSerializers.types.block(props)
// }