import React from 'react';
import { Button } from 'antd';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import styles from './header.less';

const Header: React.FC = () => (
  <>
    <header className={styles.hh} style={{ color: 'red', fontSize: 30 }}>
      Header test
    </header>
    <section>
      <h2>url-loader test</h2>
      <div>
        大于8k
        <img src={img1} id="img1" alt="" />
      </div>
      <div>
        小于8k
        <img src={img2} id="img2" alt="" />
      </div>
      <Button type="primary">Test11111</Button>
    </section>
  </>
);

export default Header;
