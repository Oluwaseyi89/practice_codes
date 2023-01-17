import { Html, Head, Main, NextScript } from 'next/document'
import { NextRequest } from 'next/server';


// class MyDocument extends Document {

//   render() {
//     return (
//       <div>
//         <Html>
//           <Head>
//             <body>
//               <Main/>
//               <NextScript/>
//             </body>
//           </Head>
//         </Html>
//       </div>
//     )
//   }
// }

// export default MyDocument

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
