import React, { useEffect, useState } from 'react';
import pictureImage from '../../../src/assets/images/icon/picture.png';
import backImage from '../../../src/assets/images/back/return.png';
import { Link } from 'react-router-dom';
import axios from '../../../src/api/axios';
import FileInput from '../../components/raffleWriting/input/FileInput';

function UserSignUp() {
  const [nickname, setNickname] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageData, setImageData] = useState(null);
  const [formData, setFormData] = useState({
    nickname: '',
    address: '',
    phoneNumber: '',
    profileImage: '',
  });

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'nickname':
        setNickname(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSignUp = async () => {
    const userInfo = {
      nickname: nickname,
      address: address,
      phoneNumber: phoneNumber,
    };

    const formData = new FormData();
    formData.append(
      'userInfoRequest',
      new Blob([JSON.stringify(userInfo)], { type: 'application/json' })
    );

    formData.append('profileImage', imageData);

    try {
      const response = await axios.post(`/user/sign-up`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      window.location.href = '/raffle';
    } catch (error) {
      alert('회원가입 실패 :(');
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('accessToken');
    if (tokenFromUrl) {
      localStorage.setItem('accessToken', tokenFromUrl);
      window.location.href = '/usersignup';
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: 260, height: 472.08, position: 'relative' }}>
        {/*뒤로가기*/}
        <Link to="/login">
          <img
            src={backImage}
            alt="backImage"
            style={{
              width: 23,
              height: 40,
              left: -10,
              top: 10,
              position: 'absolute',
            }}
          />
        </Link>
        <div style={{ width: 260, height: 472.08, position: 'relative' }}>
          <div
            style={{
              width: 260,
              height: 381,
              left: 0,
              top: 100,
              position: 'absolute',
            }}
          >
            {/*카테고리*/}
            <div
              style={{
                width: 71,
                height: 9,
                left: 100,
                top: -200,
                position: 'absolute',
                color: 'white',
                fontSize: 16,
                fontFamily: 'Karla',
                fontWeight: '700',
                lineHeight: 20,
                wordWrap: 'break-word',
              }}
            >
              회원가입
            </div>
            <div
              style={{
                width: 57,
                height: 8,
                left: 0,
                top: -44,
                position: 'absolute',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Karla',
                fontWeight: '700',
                lineHeight: 20,
                wordWrap: 'break-word',
              }}
            >
              * 닉네임
            </div>
            <div
              style={{
                width: 57,
                height: 7,
                left: 0,
                top: -108,
                position: 'absolute',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Karla',
                fontWeight: '700',
                lineHeight: 20,
                wordWrap: 'break-word',
              }}
            >
              * 회원
            </div>
            <div
              style={{
                width: 57,
                height: 9,
                left: 0,
                top: 23,
                position: 'absolute',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Karla',
                fontWeight: '700',
                lineHeight: 20,
                wordWrap: 'break-word',
              }}
            >
              * 주소
            </div>
            <div
              style={{
                height: 6,
                left: 0,
                top: 132,
                position: 'absolute',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Karla',
                fontWeight: '700',
                lineHeight: 20,
                wordWrap: 'break-word',
              }}
            >
              * 전화번호
            </div>
            <div
              style={{
                height: 9,
                left: 0,
                top: 209,
                position: 'absolute',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Karla',
                fontWeight: '700',
                lineHeight: 20,
                wordWrap: 'break-word',
              }}
            >
              * 프로필 사진
            </div>
            <div
              style={{
                width: 260,
                height: 90,
                left: 0,
                top: 27,
                position: 'absolute',
              }}
            >
              {/*인풋값*/}
              <input
                type="text"
                placeholder="활동하시는 계정의 이름을 적어주세요."
                value={nickname}
                onChange={e => handleInputChange('nickname', e.target.value)}
                style={{
                  width: 259,
                  height: 26,
                  left: 0,
                  top: 64,
                  position: 'absolute',
                  background:
                    'linear-gradient(213deg, #464646 0%, #464646 100%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: 5,
                  opacity: 0.9,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Karla',
                  fontWeight: '700',
                  lineHeight: 20,
                }}
              />

              <input
                type="text"
                placeholder="무형 래플 서비스를 위해 주소를 적어주세요."
                value={address}
                onChange={e => handleInputChange('address', e.target.value)}
                style={{
                  width: 259,
                  height: 26,
                  left: 0,
                  top: 124,
                  position: 'absolute',
                  background:
                    'linear-gradient(213deg, #464646 0%, #464646 100%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: 5,
                  opacity: 0.9,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Karla',
                  fontWeight: '700',
                  lineHeight: 20,
                }}
              />

              <input
                type="text"
                placeholder="상세 주소를 적어주세요."
                value={formData.addressData2}
                onChange={e =>
                  handleInputChange('addressData2', e.target.value)
                }
                style={{
                  width: 259,
                  height: 26,
                  left: 0,
                  top: 164,
                  position: 'absolute',
                  background:
                    'linear-gradient(213deg, #464646 0%, #464646 100%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: 5,
                  opacity: 0.9,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Karla',
                  fontWeight: '700',
                  lineHeight: 20,
                }}
              />

              <input
                type="text"
                placeholder="긴급 시 연락할 수 있는 번호를 입력해주세요."
                value={phoneNumber}
                onChange={e => handleInputChange('phoneNumber', e.target.value)}
                style={{
                  width: 259,
                  height: 26,
                  left: 0,
                  top: 237,
                  position: 'absolute',
                  background:
                    'linear-gradient(213deg, #464646 0%, #464646 100%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: 5,
                  opacity: 0.9,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Karla',
                  fontWeight: '700',
                  lineHeight: 20,
                }}
              />
              <div
                style={{
                  width: 120,
                  height: 26,
                  left: 0,
                  top: 330,
                  position: 'absolute',
                  background:
                    'linear-gradient(213deg, #7D3AF1 0%, #DC8AE1 100%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: 5,
                  backdropFilter: 'blur(4px)',
                }}
              >
                <FileInput getValue={setImageData} />
              </div>
              {/*유저/크리에이터*/}
              <div
                style={{
                  width: 120,
                  height: 26,
                  left: 0,
                  top: 0,
                  position: 'absolute',
                  background:
                    'linear-gradient(213deg, #7D3AF1 0%, #DC8AE1 100%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: 5,
                  backdropFilter: 'blur(4px)',
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 26,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    borderRadius: 25,
                  }}
                />
              </div>
              <div
                style={{
                  width: 120,
                  height: 5,
                  left: 0,
                  top: -106,
                  position: 'absolute',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Karla',
                  fontWeight: '700',
                  lineHeight: 20,
                  wordWrap: 'break-word',
                }}
              >
                유저
              </div>

              <Link to="/creatorsignup">
                <div
                  style={{
                    width: 120,
                    height: 26,
                    left: 140,
                    top: 0,
                    position: 'absolute',
                    background:
                      'linear-gradient(213deg, #464646 0%, #464646 100%)',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: 5,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      height: 26,
                      left: 0,
                      top: 0,
                      position: 'absolute',
                      borderRadius: 25,
                    }}
                  />
                </div>
              </Link>
            </div>
            <div
              style={{
                width: 119,
                height: 8,
                left: 140,
                top: -79,
                position: 'absolute',
                textAlign: 'center',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Karla',
                fontWeight: '700',
                lineHeight: 20,
                wordWrap: 'break-word',
              }}
            >
              크리에이터
            </div>

            {/*회원가입 버튼*/}
            <button
              onClick={handleSignUp}
              style={{
                width: 256.7,
                height: 34.08,
                left: 1,
                top: 500,
                position: 'absolute',
                background: '#7D3AF1',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: 5,
                backdropFilter: 'blur(4px)',
                border: 'none', // Remove default button border
                cursor: 'pointer', // Change cursor on hover
                color: 'white',
                fontSize: 16,
              }}
            >
              회원가입
              <div
                style={{
                  width: 256.7,
                  height: 34.08,
                  left: 0,
                  top: 0,
                  position: 'absolute',
                  borderRadius: 25,
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
