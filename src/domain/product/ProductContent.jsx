import React from 'react'
import { Tab } from '@headlessui/react'
import cx from 'classnames'

import Card from '../../components/Card'

const ProductContent = ({ categories, businessModels, description, trl }) => {
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
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Tab.Panel>
            <Tab.Panel as="div" className="tab-content">
              <div className="information">
                <span className="label">Categories:</span>
                <span className="text">
                  {categories?.map((cat, i) => {
                    if (i + 1 == categories.length) return cat.name
                    else return `${cat.name}, `
                  })}
                </span>
              </div>
              <div className="information">
                <span className="label">Business Models:</span>
                <span className="text">
                  {businessModels.map((model, i) => {
                    if (i + 1 == businessModels?.length) return model.name
                    else return `${model.name}, `
                  })}
                </span>
              </div>
              <div className="information">
                <span className="label">TRL:</span>
                <span className="text">{trl?.name}</span>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Card>
  )
}

export default ProductContent
