import styles from 'styles/css-playground.module.scss'
import variables from 'styles/variables.module.scss'

function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  )
}

export default function () {
  return (
    <>
    <div className="container p-3">
      <div className="dropdown m-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          id="dropdownMenuButton1"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 3
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <p>css in js</p>
    <p style={{color: variables.primaryColor}}>this is a good news</p>
    <p className={styles.error}>this is a bad news</p>
    <hr />
    <HelloWorld/>
    </>
  )
}