import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import HamburgerComponent from './HamburgerComponent'

const Index = ({ history }: RouteComponentProps) => {
  const changeRoute = (route: string) => {
    console.log('inside change route', route)
    history.push(route)
  }
  console.log('10', history)
  return (
    <div className="main">
      {/* <HamburgerComponent/> */}
      <br />
      <div className="welcome">
        <section>
          <h3>Welcome to React-Redux</h3>
        </section>
        <section className="body">
          <p>Click on below link to navigate to particular page:</p>
          <ul className="containerUL">
            <span
              // id="customToolTip"
              className="link-element"
              onClick={(e) => changeRoute('/dragndrop')}
            >
              {' '}
              DragNDrop{' '}
            </span>
            <span className="descriptionText">Dummy text for tooltip</span>
            <br />
            <br />
            <br />

            <li className="link-element">
              <a onClick={(e) => changeRoute('/game')}> GameComp </a>
            </li>
            <li className="link-element">
              <a onClick={(e) => changeRoute('/wrap')}> WrapperComponent </a>
            </li>
            <li className="link-element">
              <a onClick={(e) => changeRoute('/hooks')}> CustomHooks </a>
            </li>
            <li>
              React hooks
              <ul>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useState')}> UseState </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useReducer')}>
                    {' '}
                    UseReducer{' '}
                  </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useEffect')}> UseEffect </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useRef')}> UseRef </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useLayoutEffect')}>
                    {' '}
                    UseLayoutEffect{' '}
                  </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useImperativeHandle')}>
                    {' '}
                    UseImperativeHandle{' '}
                  </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useContext')}>
                    {' '}
                    UseContext{' '}
                  </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useMemo')}> UseMemo </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/useCallBack')}>
                    {' '}
                    UseCallBack{' '}
                  </a>
                </li>
              </ul>
            </li>

            <li className="link-element">
              <a onClick={(e) => changeRoute('/styled')}> Styled Component </a>
            </li>
            <li className="link-element">
              <a onClick={(e) => changeRoute('/counter')}>Counter</a>
            </li>
            <li className="link-element">
              <a onClick={(e) => changeRoute('/react-memo')}>React memo</a>
            </li>
            <li>
              Interview
              <ul>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/interview-xc')}>XC</a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/interview-inventiv')}>
                    Inventiv-5/4/22
                  </a>
                </li>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/interview-dragNdrop')}>
                    dragNdrop
                  </a>
                </li>
              </ul>
              <ul>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/hoc-study')}>HOC</a>
                </li>
              </ul>
              <ul>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/render-props')}>
                    Render Props
                  </a>
                </li>
              </ul>
              <ul>
                <li className="link-element">
                  <a onClick={(e) => changeRoute('/binary-tree')}>
                    Binary Tree
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/axios')}>Axios</a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/coding-interview')}>
              Coding interview of click
            </a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/tree-structure')}>
              Coding interview of displaying tree structure
            </a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/synonym')}>
              Coding interview for finding synonym word
            </a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/permission')}>
              Coding interview for read,write,delete
            </a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/starship-list')}>
              Coding interview to display starship
            </a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/rating-component')}>
              Rating Component
            </a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/useLocalStorage')}>
              useLocalStorage
            </a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/useDebounce')}>useDebounce</a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/useHistory')}>useHistory</a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/listView')}>List View</a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/carousel')}>Carousel View</a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/ticTacToe')}>Tic Tac Toe</a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/pagination')}>Pagination</a>
          </li>
          <li className="link-element">
            <a onClick={(e) => changeRoute('/memory-game')}>Memory game</a>
          </li>
          <li className="hacker-news">
            <a onClick={(e) => changeRoute('/hacker-news')}>
              Hacker News - Top 10 Articles
            </a>
          </li>
        </section>
      </div>
    </div>
  )
}

export default Index
