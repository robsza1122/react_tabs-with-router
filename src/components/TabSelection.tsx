import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { useParams, Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabSelection = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const selectedTabId = tabId ? tabId : '';

  const tabSelection = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === selectedTabId })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabSelection ? tabSelection.content : 'Please select a tab'}
      </div>
    </>
  );
};
