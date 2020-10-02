import React, { useRef, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import request from '@/utils/axios';
import marked from 'marked';
import styled from '@emotion/styled';

const ShowMark = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
`;

const Detial = (props) => {
  const { match } = props;
  const { id } = match.params;
  const ShowMarkRef = useRef(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    request.get('/api/getBlog', { id }).then((res) => {
      if (res.code === 'Y') {
        ShowMarkRef.current.innerHTML = marked(res.data.content);
        setInfo(res.data);
      } else {
        setInfo(null);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {info === null ? null : (
        <>
          <p>标题：{info.title}</p>
          <p>描述：{info.describe}</p>
          <p>作者：{info.author}</p>
          <p>作者：{info.sort}</p>
          <p>时间：{new Date(info.utime).toLocaleDateString()}</p>
        </>
      )}
      <ShowMark ref={ShowMarkRef} />
    </>
  );
};

export default withRouter(Detial);
