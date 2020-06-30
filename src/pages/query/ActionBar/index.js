import React from 'react'
import loadable from '@loadable/component'
import './index.css'

export default function ActionBar({ actions }) {
  return (
    <div className="action-bar">
      {actions
        .filter((action) => action.type === 'block')
        .map((action, index) => {
          const ActionButton = loadable(() =>
            import(`@/components/actions/${action.name}`),
          )
          return (
            <ActionButton
              key={index}
              type={action.type}
              conf={action.conf || {}}
            >
              {action.name}
              {'>'}
            </ActionButton>
          )
        })}
    </div>
  )
}
