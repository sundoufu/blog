import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
      © {new Date().getFullYear()}, 이 블로그의 소스 코드는
        {` `}
        {/* TODO: 쿼리로 깃허브 아이디 가져오기 */}
        <a href={`https://github.com/kimjson/blog`}>깃허브</a>에 공개되어 있습니다.
      </footer>
    </div>
  )
}

export default Layout
