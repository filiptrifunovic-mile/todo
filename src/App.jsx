import { AiOutlinePlus } from "react-icons/ai";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
};

function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo app</h3>
        <form className={style.form}>
          <input type="text" placeholder="Add todo" className={style.input} />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul></ul>
      </div>
    </div>
  );
}

export default App;
