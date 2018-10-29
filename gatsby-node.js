const path = require ('path');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  const blogPostTemplate = path.resolve (`src/templates/blog-post.js`);
  const blogPostTagsTemplate = path.resolve (`src/templates/blog-post-tags.js`);
  const blogPostRecentTemplate = path.resolve (`src/templates/blog-post-recent.js`);

  return graphql (
    `{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
            img
            tags
            excerpt
            comments
          }
        }
      }
    }
  }`
  ).then (result => {
    if (result.errors) {
      return Promise.reject (result.errors);
    }
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach (({node}, index) => {
      createPage ({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      });
    });

    const tagsArray = posts.map(( { node }) => { return node.frontmatter.tags } )
      .reduce((a, b) => { return a.concat(b) }, [])
      .filter((type, index, array) => { return array.indexOf(type) === index})
      .sort();

    tagsArray.forEach((tag) => {
      createPage({
        path: `/blog/${tag}`,
        component: blogPostTagsTemplate,
        context: {
          tag
        }
      });
    });

    createPage ({
      path: '/blog/recent',
      component: blogPostRecentTemplate,
    });

  });
};
