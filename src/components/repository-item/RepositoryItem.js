import * as style from './style';

function RepositoryItem({ name, linkToRepo, fullName }) {
    return (
        <style.Wrapper>
            <style.WrapperTitle>{name}</style.WrapperTitle>
            <style.WrapperFullName>Nome completo:</style.WrapperFullName>
            <style.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer" >
                {fullName}
            </style.WrapperLink>
        </style.Wrapper>
    )
}

export default RepositoryItem;
