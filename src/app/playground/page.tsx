import React from 'react';

const Playground = () => {
  return (
    <div className="">
      <div
        style={{
          position: 'relative',
          paddingTop: 'max(60%,324px)',
          width: '100%',

          height: 0,
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            border: 'none',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
          }}
          src={'https://online.fliphtml5.com/xqyu/bkjg'}
          // seamless="seamless"
          scrolling="no"
          frameBorder={0}
          // allowTransparency="true"
          // allowFullScreen="true"
        />
      </div>

      <div>1</div>
    </div>
  );
};

export default Playground;
