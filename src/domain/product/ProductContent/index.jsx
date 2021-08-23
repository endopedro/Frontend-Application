import React from 'react'
import { Tab } from '@headlessui/react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import DOMPurify from 'dompurify'

import Card from '../../../components/Card'
import Attributes from './Attributes'

const ProductContent = () => {
  const product = useSelector((state) => state.product.data)

  return (
    <Card>
      <div className="content">
        <Tab.Group as="div" className="tabs">
          <Tab.List as="div" className="tab-list">
            <Tab as="div" className={({ selected }) => cx('tab', { selected })}>
              Description
            </Tab>
            <Tab as="div" className={({ selected }) => cx('tab', { selected })}>
              Attributes
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel as="div" className="tab-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description),
                }}
              />
            </Tab.Panel>
            <Tab.Panel as="div" className="tab-content">
              <Attributes />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Card>
  )
}

export default ProductContent
