import { ReactNode } from "react"
import cx from "classnames"
import { Header } from "../Header"

export type Tab = {
  id?: string
  title: string
  component: ReactNode
}

export type TabsProps = {
  tabs: Tab[]
  rightContent?: ReactNode
  activeTab: number
  onTabClick: (activeTab: number) => void
  testId?: string
}

export const Tabs = (props: TabsProps) => {
  const { tabs, rightContent, activeTab, onTabClick, testId } = props

  return (
    <div className="flex flex-col max-h-full relative" data-testid={testId}>
      <Header rightContent={rightContent}>
        {tabs.map((tab, i) => {
          const isActive = i === activeTab
          return (
            <button
              key={i}
              className={cx("px-4 py-2 bg-none whitespace-nowrap", {
                "text-gray-500 dark:text-gray-400": !isActive,
                "bg-gray-300 dark:bg-gray-700": isActive,
              })}
              onClick={() => onTabClick(i)}
              role="tab"
              aria-selected={isActive}
              data-testid={`tab-button-${tab.id || tab.title}`}
            >
              <h2 className="font-bold">{tab.title}</h2>
            </button>
          )
        })}
      </Header>
      <div className="overflow-y-auto dark:bg-gray-900">
        {tabs[activeTab]?.component}
      </div>
    </div>
  )
}
