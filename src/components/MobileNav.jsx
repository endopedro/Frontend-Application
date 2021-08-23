import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import cx from 'classnames'
import Nav from './Nav'

const MobileNav = ({ page, blogName }) => (
  <div className="mobile-nav">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button as="div" className={cx('menu-button', { open })}>
            <BiChevronDown size="32" />
          </Disclosure.Button>

          {open && (
            <div>
              <Disclosure.Panel static>
                <Nav page={page} />
              </Disclosure.Panel>
            </div>
          )}
        </>
      )}
    </Disclosure>
  </div>
)

export default MobileNav
