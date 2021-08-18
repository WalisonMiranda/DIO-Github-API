import { useState, useEffect } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as style from './style';

import RepositoryItem from '../repository-item/RepositoryItem';

function Repositories() {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserRepos, setHasUserRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserRepos(true);

    }, [githubState.user.login]);


    return (
        <>
        {hasUserRepos ? (
          <style.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <style.WrapperTabList>
              <style.WrapperTab>Repositories</style.WrapperTab>
              <style.WrapperTab>Starred</style.WrapperTab>
            </style.WrapperTabList>
            <style.WrapperTabPanel>
              <style.WrapperList>
                {githubState.repositories.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.html_url}
                    fullName={item.full_name}
                  />
                ))}
              </style.WrapperList>
            </style.WrapperTabPanel>
            <style.WrapperTabPanel>
              <style.WrapperList>
                {githubState.starred.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.full_name}
                    fullName={item.full_name}
                  />
                ))}
              </style.WrapperList>
            </style.WrapperTabPanel>
          </style.WrapperTabs>
        ) : (
          <></>
      )}
    </>
    )
};

export default Repositories;
