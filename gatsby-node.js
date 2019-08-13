// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// You can delete this file if you're not using it

const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiBlog {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiBlog.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id
        }
      })
    })
  })

  const getPages = makeRequest(
    graphql,
    `
    {
      allStrapiPage {
        edges {
          node {
            id
            slug
            template
            herosection {
              id
            }
            imagelists {
              id
            }
            reportsections {
              id
            }
            sectionwithcontentandimage {
              id
            }
            sectionwithcontentincenters {
              id
            }
            stepsections {
              id
            }
            contentwithcards {
              id
            }
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each user.
    result.data.allStrapiPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/${node.template}.js`),
        context: {
          id: node.id,
          heroSectionId: node.herosection && node.herosection.id,
          imageListSectionId: node.imagelists && node.imagelists.id,
          reportSectionsId: node.reportsections && node.reportsections.id,
          sectionWithContentAndImageId:
            node.sectionwithcontentandimage &&
            node.sectionwithcontentandimage.id,
          sectionWithContentInCenterId:
            node.sectionwithcontentincenters &&
            node.sectionwithcontentincenters.id,
          stepSectionId:
            node.stepsections && node.stepsections.length && node.stepsections[0].id,
          contentWithCardId:
            node.contentwithcards &&
            node.contentwithcards.length &&
            node.contentwithcards[0].id
        }
      })
    })
  })

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([getArticles, getPages])
}
