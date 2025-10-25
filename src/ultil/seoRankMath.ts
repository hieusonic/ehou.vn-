function removeTrailingSlashFromCanonical(linkString: string) {
  return linkString.replace(
    /(link rel="canonical" href="https:\/\/ehou\.aum\.edu\.vn\/[^/]+)\/"/g,
    '$1"'
  );
}

export const replaceSeoRM = (input: string) => {
  input = removeTrailingSlashFromCanonical(input);
  input = input.replace(
    `link rel="canonical" href="https://ehou.aum.edu.vn/`,
    `link rel="canonical" href="https://ehou.vn/`
  );
  input = input.replace(
    `meta property="og:url" content="https://ehou.aum.edu.vn`,
    `meta property="og:url" content="https://ehou.vn`
  );

  input = input.replace(
    `"@id":"https://ehou.aum.edu.vn/#organization"`,
    `"@id":"https://ehou.vn/#organization"`
  );
  input = input.replace(
    `https://ehou.aum.edu.vn/#logo`,
    `https://ehou.vn/#logo`
  );
  input = input.replace(
    `https://ehou.aum.edu.vn/#website`,
    `https://ehou.vn/#website`
  );
  input = input.replace(
    `https://ehou.aum.edu.vn/#webpage`,
    `https://ehou.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://ehou.aum.edu.vn"`,
    `"url":"https://ehou.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://ehou.aum.edu.vn`,
    `"@type":"WebPage","@id":"https://ehou.vn`
  );

  input = input.replace(
    `#webpage","url":"https://ehou.aum.edu.vn`,
    `#webpage","url":"https://ehou.vn`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://ehou.aum.edu.vn/`,
    `"mainEntityOfPage":{"@id":"https://ehou.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://ehou.aum.edu.vn/#organization`,
    `"worksFor":{"@id":"https://ehou.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://ehou.aum.edu.vn"]`,
    `"sameAs":["https://ehou.vn"]`
  );
  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};
