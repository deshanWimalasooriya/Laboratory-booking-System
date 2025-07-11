import React from 'react'
import Button from '../ui/Button'

const EmptyState = ({
  icon,
  title,
  description,
  action,
  actionText,
  className = ''
}) => {
  const defaultIcon = (
    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  )

  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="mx-auto mb-4">
        {icon || defaultIcon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {title || 'No data available'}
      </h3>
      <p className="text-gray-600 mb-6 max-w-sm mx-auto">
        {description || 'There is no data to display at the moment.'}
      </p>
      {action && actionText && (
        <Button onClick={action}>
          {actionText}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
