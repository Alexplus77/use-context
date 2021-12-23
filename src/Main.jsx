import React, { useContext } from "react";
import ThemeContext from "./TheamContext";

function Main() {
  const [theme]=useContext(ThemeContext)
  return (
    <main className={theme==='light' ?"light-theme":'dark-theme'}>
      <h2>Main Content</h2>
      <div>
        Далеко-далеко за словесными горами в стране, гласных и согласных живут
        рыбные тексты. Напоивший рукопись бросил дорогу живет, ведущими ее
        рыбными пустился запятых даль несколько вопрос но ему проектах его
        вскоре, жаренные курсивных единственное одна которой свое лучше своего
        океана домах! Эта речью строчка коварный большой возвращайся страну
        бросил курсивных она рыбными рот своих за раз по всей переписали, щеке
        вскоре снова, которое, образ но ведущими своего текстами грустный
        вершину! Большого встретил несколько всемогущая пор собрал, возвращайся
        власти себя однажды запятой, ipsum повстречался его даль своего дороге
        живет домах текстов свое. Назад рукописи несколько жизни реторический,
        ему встретил, ручеек деревни о, гор большого необходимыми.
      </div>
    </main>
  );
}

export default Main;
