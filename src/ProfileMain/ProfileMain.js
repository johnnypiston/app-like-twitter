import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Feed from '../Feed/Feed';

const TWEETS = [
  {
    id: '01',
    tweetAuthor: {
      avatar: `${process.env.PUBLIC_URL}/img/avatar-every-iteraction.png`,
      name: 'Every Interaction',
      nickname: 'EveryInteract',
    },
    date: '25 Mar 2015',
    text:
      "We’ve made some more resources for all you wonderful <a href=''>#design</a> folk <a href=''>everyinteraction.com/resources/</a> <a href='#webdesign'>#webdesign <a href='#UI'#UI</a>",
    tweetStatistics: {
      comments: 0,
      retweets: 17,
      likes: 47,
    },
    pinnedStatus: true,
  },
  {
    id: '02',
    tweetAuthor: {
      avatar: `${process.env.PUBLIC_URL}/img/avatar-every-iteraction.png`,
      name: 'Every Interaction',
      nickname: 'EveryInteract',
    },
    date: '14 Jun 2018',
    text:
      "Our new website concept; Taking you from… @ Every Interaction <a href=''>instagram.com/p/BNFGrfhBP3M/</a>",
    tweetStatistics: {
      comments: 1,
      retweets: 4,
      likes: 2,
    },
  },
  {
    id: '03',
    tweetAuthor: {
      avatar: `${process.env.PUBLIC_URL}/img/avatar-every-iteraction.png`,
      name: 'Every Interaction',
      nickname: 'EveryInteract',
    },
    date: '18 Nov 2017',
    text:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
    tweetStatistics: {
      comments: 0,
      retweets: 0,
      likes: 0,
    },
  },
];

const PROFILE = {
  name: 'Every Interaction',
  nickname: 'EveryInteract',
  avatar: `${process.env.PUBLIC_URL}/img/avatar-every-iteraction.jpg`,
  verifyStatus: true,
  aboutInfo:
    'UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.',
  location: 'London, UK',
  link: 'everyinteraction.com',
  joinDate: 'May 2008',
};

const FOLLOWERS = [
  {
    id: 'johndoe001',
    avatar: `${process.env.PUBLIC_URL}/img/followers/photo - 001.png`,
    name: 'John Doe',
    link: '/johndoe',
  },
  {
    id: 'johndoe002',
    avatar: `${process.env.PUBLIC_URL}/img/followers/photo - 002.png`,
    name: 'John Doe2',
    link: '/johndoe2',
  },
  {
    id: 'johndoe003',
    avatar: `${process.env.PUBLIC_URL}/img/followers/photo - 003.png`,
    name: 'John Doe3',
    link: '/johndoe3',
  },
  {
    id: 'johndoe004',
    avatar: `${process.env.PUBLIC_URL}/img/followers/photo - 004.png`,
    name: 'John Doe4',
    link: '/johndoe4',
  },
  {
    id: 'johndoe005',
    avatar: `${process.env.PUBLIC_URL}/img/followers/photo - 005.png`,
    name: 'John Doe5',
    link: '/johndoe5',
  },
  {
    id: 'johndoe006',
    avatar: `${process.env.PUBLIC_URL}/img/followers/photo - 006.png`,
    name: 'John Doe6',
    link: '/johndoe6',
  },
];

const MEDIA = [
  {
    id: 'media001',
    preview: `${process.env.PUBLIC_URL}/img/photos/photoPreview - 001.png`,
    name: 'Photo - 001',
    link: `${process.env.PUBLIC_URL}/img/photos/photo - 001.png`,
  },
  {
    id: 'media002',
    preview: `${process.env.PUBLIC_URL}/img/photos/photoPreview - 002.png`,
    name: 'Photo - 002',
    link: `${process.env.PUBLIC_URL}/img/photos/photo - 002.png`,
  },
  {
    id: 'media003',
    preview: `${process.env.PUBLIC_URL}/img/photos/photoPreview - 003.png`,
    name: 'Photo - 003',
    link: `${process.env.PUBLIC_URL}/img/photos/photo - 003.png`,
  },
  {
    id: 'media004',
    preview: `${process.env.PUBLIC_URL}/img/photos/photoPreview - 004.png`,
    name: 'Photo - 004',
    link: `${process.env.PUBLIC_URL}/img/photos/photo - 004.png`,
  },
  {
    id: 'media005',
    preview: `${process.env.PUBLIC_URL}/img/photos/photoPreview - 005.png`,
    name: 'Photo - 005',
    link: `${process.env.PUBLIC_URL}/img/photos/photo - 005.png`,
  },
  {
    id: 'media006',
    preview: `${process.env.PUBLIC_URL}/img/photos/photoPreview - 006.png`,
    name: 'Photo - 006',
    link: `${process.env.PUBLIC_URL}/img/photos/photo - 006.png`,
  },
];

const TRENDS_DATA = {
  trendTitle: 'United Kingdom Trend',
  TRENDS: [
    {
      id: '001',
      title: '#BringYourDogToWorkD',
    },
    {
      id: '002',
      title: '#FridayFeeling',
      addition: '12.1K Tweets',
    },
    {
      id: '003',
      title: '#BrexitAnniversary',
      addition: 'It’s one year since the UK voted to leave the European Union',
    },
    {
      id: '004',
      title: 'HMS Queen Elizabeth',
      addition: '1,036 Tweets',
    },
    {
      id: '005',
      title: 'Joe Budden',
      addition: '1,036 Tweets',
    },
    {
      id: '006',
      title: 'Trident',
      addition: '6,136 Tweets',
    },
  ],
};

const RECOMMENDATIONS = [
  {
    id: 'account001',
    name: 'AppleInsider',
    nickname: 'appleinsider',
    avatar: `${process.env.PUBLIC_URL}/img/other-avatar/ava - 001.png`,
  },
  {
    id: 'account002',
    name: 'Creode',
    nickname: 'Creode',
    avatar: `${process.env.PUBLIC_URL}/img/other-avatar/ava - 002.png`,
    verify: true,
  },
  {
    id: 'account003',
    name: 'Epiphany Search',
    nickname: 'epiphanysearch',
    avatar: `${process.env.PUBLIC_URL}/img/other-avatar/ava - 003.png`,
  },
];

const ProfileMain = function (props) {
  const FeedWrapper = function ({ match }) {
    return <Feed {...props} data={TWEETS} feedName={match.params.id} />;
  };

  const TweetsFeed = function ({ match }) {
    return (
      <>
        <div className="col-lg-6">
          <Feed {...props} data={TWEETS} feedName={match.params.id} />
        </div>
        <div className="col-lg-3">
          <RightSidebar recommendations={RECOMMENDATIONS} trends={TRENDS_DATA} />
        </div>
      </>
    );
  };

  const ProfileFeed = function ({ match }) {
    return (
      <div className="col-lg-9">
        <h2>
          {match.params.direction}
          {' '}
users profile grid
        </h2>
      </div>
    );
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileSidebar profile={PROFILE} followers={FOLLOWERS} media={MEDIA} />
          </div>
          <Switch>
            <Route
              path={`${props.match.path}/:direction(following|followers)`}
              component={ProfileFeed}
            />
            <Route path={`${props.match.path}/:id`} component={TweetsFeed} />
            <Route exact path={props.match.path} render={TweetsFeed} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default ProfileMain;
