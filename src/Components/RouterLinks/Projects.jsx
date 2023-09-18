import React from "react";

import style from './Projects.module.css'

import home1 from './ProjectsImg/home1.png'
import home2 from './ProjectsImg/home2.png'
import home3 from './ProjectsImg/home3.png'
import home4 from './ProjectsImg/home4.png'
import home5 from './ProjectsImg/home5.png'

export default function Projects() {
    return (
        <div className={style.ProjectsCon}>
            <div>
                <div className={style.DescribtionBlock}>
                    <div className={style.Title}>
                        1. Танцующий дом (США)
                    </div>
                    <div className={style.DescribtionPoint}>
                        Он расположен в Калифорнии. Для фасада использованы металл и дерево. Эффектная форма, изогнутая крыша – все это повлияло на вид сооружения. Создается чувство, что дом танцует. Однако он отлично вписывается в ландшафт.
                    </div>
                </div>
                <div>
                    <img src={home1} />
                </div>
            </div>
            <div>
                <div className={style.DescribtionBlock}>
                    <div className={style.Title}>
                        2.Дом-раковина "Наутилус" (Мексика)
                    </div>
                    <div className={style.DescribtionPoint}>
                        Он расположен в Мексике. Сооружение увлекает своим необычным и смелым дизайном. При создании немаловажную роль сыграла экологичность. Через разноцветное стекло проникают лучи солнца, наполняя дом бликами. В комнаты ведут дорожки из камня, по полу стелется растительный ковер.
                    </div>
                </div>
                <div>
                    <img src={home2} />
                </div>
            </div>
            <div>
                <div className={style.DescribtionBlock}>
                    <div className={style.Title}>
                        3. Glass Pavilion (США)

                    </div>
                    <div className={style.DescribtionPoint}>
                        Стеклянный дом расположен в Калифорнии. Стильная и современная постройка с намеком на минимализм. Архитектор Стив Герман потратил 6 лет на его сощдание. Здесь предложены не только комнаты для жителей и гостей, но также вместительный гараж на 32 автомобиля.

                    </div>
                </div>
                <div>
                    <img src={home3} />
                </div>
            </div>
            <div>
                <div className={style.DescribtionBlock}>
                    <div className={style.Title}>
                        4. Razor Residence (США)

                    </div>
                    <div className={style.DescribtionPoint}>
                        Роскошный особняк в Калифорнии известный фанатам вселенной Marvel как резиденция Железного человека. Здесь были сняты основные моменты фильма. После грандиозного успеха кинокартины здание было продано за 117 миллионов долларов.

                    </div>
                </div>
                <div>
                    <img src={home4} />
                </div>
            </div>
            <div>
                <div className={style.DescribtionBlock}>
                    <div className={style.Title}>
                        5."Гоу холм" (Великобритания)

                    </div>
                    <div className={style.DescribtionPoint}>
                        Дом расположен в Уэльсе. Благодаря дизайну его называют "домом хоббита", но прямого отношения к съемкам фильма жилье не имеет.

                        Фотограф Саймон Дэйл построил его за 3000 фунтов стерлингов. Эко-дом независим от внешнего мира. В нем сохраняется комфортная температура благодаря природной теплоизоляции. Электричество генерируется с помощью солнечных батарей.



                    </div>
                </div>
                <div>
                    <img src={home5} />
                </div>
            </div>
        </div>
    )
}
export { Projects }