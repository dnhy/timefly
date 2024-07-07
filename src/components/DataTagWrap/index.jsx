import React from 'react';

export default function DataTagWrap({ items, render }) {
  return (
    <div className="flex items-center">
      {items.map((item, index) => {
        const isLastChild = index === items.length - 1;
        return render(item, isLastChild);
      })}
    </div>
  );
}

// export default function DataTagWrap({ render }) {
//   const { children } = render().props;
//   return (
//     <div className="flex items-center">
//       {children.map((child, index) => {
//         const isLastChild = index === children.length - 1;
//         return (
//           <Fragment key={child}>
//             {React.cloneElement(child, { isLastChild })}
//           </Fragment>

//         );
//       })}
//     </div>
//   );
// }
