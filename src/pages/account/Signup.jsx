import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './account.css';

const Signup = () => {
    const navigate = useNavigate();

    const usernameRef = useRef();
    const usernameErrRef = useRef();
    const nicknameRef = useRef();
    const nicknameErrRef = useRef();
    const userIdRef = useRef();
    const userIdErrRef = useRef();
    const passwordRef = useRef();
    const passwordErrRef = useRef();
    const passCheckRef = useRef();
    const passCheckErrRef = useRef();
    const emailRef = useRef();
    const emailErrRef = useRef();
    const phoneErrRef = useRef();

    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passCheck, setPassCheck] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleUsername = e => {
        setUsername(e.target.value);
        usernameErrRef.current.textContent = '';
    };
    const handleNickname = e => {
        setNickname(e.target.value);
        nicknameErrRef.current.textContent = '';
        if (nickname.trim().length < 3 || nickname.trim().length > 20) {
            nicknameErrRef.current.textContent = '3~20글자 사이로 입력해주세요.'
        }
    };
    const handleUserId = e => {
        setUserId(e.target.value);
        userIdErrRef.current.textContent = '';
        if (userId.trim().length < 3 || userId.trim().length > 20) {
            userIdErrRef.current.textContent = '3~20글자 사이로 입력해주세요.'
        }
    };
    const handlePassword = e => {
        setPassword(e.target.value);
        passwordErrRef.current.textContent = '';
    };
    const handlePassCheck = e => {
        setPassCheck(e.target.value);
        passCheckErrRef.current.textContent = '';
    };
    const handleEmail = e => {
        setEmail(e.target.value);
        emailErrRef.current.textContent = '';
    };
    const handleAddress = e => setAddress(e.target.value);
    const handlePhone = e => {
        setPhone(e.target.value);
        phoneErrRef.current.textContent = '';
    }

    const handleCheckNicknameDouble = async () => {
        try {
            const response = await axios.get('/data/users.json');
            const userData = response.data.users;
            const storedUsers = sessionStorage.getItem('users');
            const sessionUsers = storedUsers ? JSON.parse(storedUsers) : [];
            const combinedUsers = [...sessionUsers, ...userData];
            const targetData = combinedUsers.find(user => user.nickname === nickname.trim());
            if (targetData) {
                nicknameErrRef.current.textContent = '이미 사용 중인 닉네임입니다.'
            } else {
                nicknameErrRef.current.textContent = '사용 가능한 닉네임입니다.'
            }
        } catch (error) {
            console.error('닉네임 중복 확인 에러 : ', error);
            nicknameErrRef.current.textContent = '닉네임 중복 확인 중 오류 발생. 새로고침 후 사용해주세요.'
        }
    };

    const handleCheckUserIdDouble = async () => {
        try {
            const response = await axios.get('/data/users.json');
            const userData = response.data.users;
            const storedUsers = sessionStorage.getItem('users');
            const sessionUsers = storedUsers ? JSON.parse(storedUsers) : [];
            const combinedUsers = [...sessionUsers, ...userData];
            const targetData = combinedUsers.find(user => user.userId === userId.trim());
            if (targetData) {
                nicknameErrRef.current.textContent = '이미 사용 중인 아이디입니다.'
            } else {
                nicknameErrRef.current.textContent = '사용 가능한 아이디입니다.'
            }
        } catch (error) {
            console.error('아이디 중복 확인 에러 : ', error);
            nicknameErrRef.current.textContent = '아이디 중복 확인 중 오류 발생. 새로고침 후 사용해주세요.'
        }
    };

    const handleCheckEmailDouble = async () => {
        try {
            const response = await axios.get('/data/users.json');
            const userData = response.data.users;
            const storedUsers = sessionStorage.getItem('users');
            const sessionUsers = storedUsers ? JSON.parse(storedUsers) : [];
            const combinedUsers = [...sessionUsers, ...userData];
            const targetData = combinedUsers.find(user => user.email === email.trim());
            if (targetData) {
                nicknameErrRef.current.textContent = '이미 사용 중인 이메일입니다.'
            } else {
                nicknameErrRef.current.textContent = '사용 가능한 이메일입니다.'
            }
        } catch (error) {
            console.error('이메일 중복 확인 에러 : ', error);
            nicknameErrRef.current.textContent = '이메일 중복 확인 중 오류 발생. 새로고침 후 사용해주세요.'
        }
    };

    const handleSignup = async () => {
        // 유효성 검사 
        let valid = true;

        const usernameValid = username?.trim() || '';
        const nicknameValid = nickname?.trim() || '';
        const userIdValid = userId?.trim() || '';
        const passwordValid = password?.trim() || '';
        const passCheckValid = passCheck?.trim() || '';
        const emailValid = email?.trim() || '';
        const phoneValid = phone?.trim() || '';

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;

        if (!usernameValid) {
            usernameErrRef.current.textContent = '사용자 이름을 입력해주세요.';
            valid = false;
        }

        if (!nicknameValid) {
            nicknameErrRef.current.textContent = '닉네임을 입력해주세요.';
            valid = false;
        }

        if (!userIdValid) {
            userIdErrRef.current.textContent = '아이디를 입력해주세요.';
            valid = false;
        }

        if (!passwordValid || !passwordRegex.test(passwordValid)) {
            passwordErrRef.current.textContent = '대소문자, 숫자, 특수문자 모두 포함, 8~20자로 입력해주세요.';
            valid = false;
        }

        if (!passCheckValid) {
            passCheckErrRef.current.textContent = '비밀번호를 다시 입력해주세요.';
            valid = false;
        }

        if (passwordValid !== passCheckValid) {
            passCheckErrRef.current.textContent = '입력하신 비밀번호와 일치하지 않습니다.';
        }

        if (!emailValid || !emailRegex.test(emailValid)) {
            emailErrRef.current.textContent = '올바른 이메일 주소를 입력해주세요.';
            valid = false;
        }

        if (phoneValid && !phoneRegex.test(phoneValid)) {
            phoneErrRef.current.textContent = '000-0000-0000 형식으로 입력해주세요.';
        }

        if (!valid) {
            if (!usernameValid) usernameRef.current.focus();
            else if (!nicknameValid) nicknameRef.current.focus();
            else if (!userIdValid) userIdRef.current.focus();
            else if (!passwordValid) passwordRef.current.focus();
            else if (!emailValid) emailRef.current.focus();
            return;
        }

        try {
            /* 
            // 백엔드 작업과 연계될 때
            // '/api/signup'는 API 호출을 위해 사용하는 앤드포인트.
            // 앤드포인트는 백엔드 측에서 지정해서 프론트 작업자에게 알려줌. 
            const response = await axios.post('/api/signup', {
                username,
                nickname,
                userId,
                password,
                email,
                address,
                phone
            });
            // 응답값의 상태코드가 200가 같으면. (200은 OK 상태를 가리킴)
            if(response.status === 200){
                // axios.post명령으로 정보가 잘 전달 되었을때 처리할 명령
                // 회원가입 완료 페이지로 이동 -> 리다이렉션 처리
            }
            */

            // 프론트로만 작업할 때 테스트를 위해 신규 사용자 정보를 세션에 저장하기 
            const userData = {
                id: new Date().getTime(),
                username,
                nickname,
                userId,
                password,
                email,
                address,
                phone
            }

            const storedUsers = sessionStorage.getItem('users');
            let users = [];
            if (storedUsers) {
                try {
                    const parsed = JSON.parse(storedUsers);
                    users = Array.isArray(parsed) ? parsed : [];
                } catch (err) {
                    console.error('세션 유저 데이터 파싱 오류 : ', err);
                    users = [];
                }
            }
            users.push(userData);
            sessionStorage.setItem('users', JSON.stringify(users));
            navigate('/account/signup-complete');
        } catch (error) {
            console.error('회원가입 실패 : ', error);
        }
    };

    return (
        <div className="account">
            <div className="account-inner">
                <h2>회원가입</h2>
                <div className='comment mb4'>*는 필수 입력 사항입니다.</div>
                <div className='input-name mb4'>
                    <input
                        type='text'
                        placeholder='*이름을 입력해주세요.'
                        value={username}
                        onChange={handleUsername}
                        ref={usernameRef}
                    />
                    <div className='noti' ref={usernameErrRef}></div>
                </div>
                <div className='input-nickname mb4'>
                    <input
                        type='text'
                        placeholder='*닉네임을 입력해주세요.(3~20자)'
                        value={nickname}
                        onChange={handleNickname}
                        ref={nicknameRef}
                    />
                    <button onClick={handleCheckNicknameDouble}>닉네임 중복 확인</button>
                    <div className='noti' ref={nicknameErrRef}></div>
                </div>
                <div className='input-id mb4'>
                    <input
                        type='text'
                        placeholder='*아이디를 입력해주세요.(3~20자)'
                        value={userId}
                        onChange={handleUserId}
                        ref={userIdRef}
                    />
                    <button onClick={handleCheckUserIdDouble}>아이디 중복 확인</button>
                    <div className='noti' ref={userIdErrRef}></div>
                </div>
                <div className='input-pw mb4'>
                    <input
                        type='password'
                        placeholder='*비밀번호를 입력해주세요.(대소문자, 숫자, 특수기호 포함 8~20자'
                        value={password}
                        onChange={handlePassword}
                        ref={passwordRef}
                    />
                    <div className='noti' ref={passwordErrRef}></div>
                </div>
                <div className='input-pw mb4'>
                    <input
                        type='password'
                        placeholder='*비밀번호를 다시 한 번 입력해주세요.'
                        value={passCheck}
                        onChange={handlePassCheck}
                        ref={passCheckRef}
                    />
                    <div className='noti' ref={passCheckErrRef}></div>
                </div>
                <div className='input-email mb4'>
                    <input
                        type='text'
                        placeholder='*이메일을 입력해주세요.'
                        value={email}
                        onChange={handleEmail}
                        ref={emailRef}
                    />
                    <button onClick={handleCheckEmailDouble}>이메일 중복 확인</button>
                    <div className='noti' ref={emailErrRef}></div>
                </div>
                <div className='input-address mb4'>
                    <input
                        type='text'
                        placeholder='주소를 입력해주세요.'
                        value={address}
                        onChange={handleAddress}
                    />
                </div>
                <div className='input-phone mb12'>
                    <input
                        type='text'
                        placeholder='전화번호를 입력해주세요.'
                        value={phone}
                        onChange={handlePhone}
                    />
                    <div className='noti' ref={phoneErrRef}></div>
                </div>
                <div className='btn-submit'>
                    <button onClick={handleSignup}>회원가입</button>
                </div>
            </div>
        </div>
    )
};

export default Signup;