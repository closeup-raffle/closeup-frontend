// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as S from './style';
import axios from '../../../api/axios';

function Box() {
  const [raffleProducts, setRaffleProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // URL에 토큰 있으면 안보이게
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('accessToken');
    if (tokenFromUrl) {
      localStorage.setItem('accessToken', tokenFromUrl);
      window.location.href = '/raffle';
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          '/user/raffle-products?page=1&size=10'
        );
        setRaffleProducts(response.data.result.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchData();
  }, []);

  return (
    <S.BoxWrapper>
      <S.RaffleTitle>래플 목록</S.RaffleTitle>
      <S.RaffleView>
        <S.RaffleViewTitle>전체 래플 목록</S.RaffleViewTitle>
        <S.RaffleLine> </S.RaffleLine>
        {loading ? (
          <p>Loading…</p>
        ) : (
          raffleProducts.map(product => (
            // eslint-disable-next-line react/jsx-key
            <S.StyledLink to={`/raffle/${product.raffleProductId}`}>
              <S.RaffleContents key={product.raffleProductId}>
                <S.RaffleContentsImages src={product.raffleProductThumbnail} />
                <S.RaffleContentslist>
                  <S.RaffleContentsTitle>
                    {product.raffleProductTitle}
                  </S.RaffleContentsTitle>
                  <S.RaffleContentsDate>
                    {product.startDate} ~ {product.endDate}
                  </S.RaffleContentsDate>
                  <S.RaffleContentsPrice>
                    {product.raffleProductPrice}Point
                  </S.RaffleContentsPrice>
                </S.RaffleContentslist>
              </S.RaffleContents>
            </S.StyledLink>
          ))
        )}
      </S.RaffleView>
    </S.BoxWrapper>
  );
}

export default Box;
