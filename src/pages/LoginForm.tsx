import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/auth/login", { username, password });
      const token = res.data.token;
      if (token) {
        login(token, username);
        // TODO: alert 대신 toast UI로 변경 가능
        alert("로그인 성공!");
        navigate("/");
      }
    } catch (_) {
      setError("로그인 실패. 아이디 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className="max-w-sm mx-auto card bg-base-200 shadow-xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">로그인</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="btn btn-primary w-full bg-base-100">
          로그인
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="btn btn-outline w-full bg-base-100"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
