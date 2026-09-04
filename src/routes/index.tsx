import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { BlogPage } from '../pages/Blog/BlogPage';
import { ArticleDetailPage } from '../pages/Blog/ArticleDetailPage';
import { ShowsPage } from '../pages/Shows/ShowsPage';
import { ShowDetailPage } from '../pages/Shows/ShowDetailPage';
import { SchedulePage } from '../pages/Schedule/SchedulePage';
import { ChartsPage } from '../pages/Charts/ChartsPage';
import { PodcastsPage } from '../pages/Podcasts/PodcastsPage';
import { PodcastDetailPage } from '../pages/Podcasts/PodcastDetailPage';
import { HostsPage } from '../pages/Hosts/HostsPage';
import { HostDetailPage } from '../pages/Hosts/HostDetailPage';
import { VideosPage } from '../pages/Videos/VideosPage';
import { EventsPage } from '../pages/Events/EventsPage';
import { EventDetailPage } from '../pages/Events/EventDetailPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { PromotePage } from '../pages/Promote/PromotePage';
import { SearchPage } from '../pages/Search/SearchPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<ArticleDetailPage />} />
      <Route path="/article/:slug" element={<ArticleDetailPage />} />
      <Route path="/shows" element={<ShowsPage />} />
      <Route path="/shows/:slug" element={<ShowDetailPage />} />
      <Route path="/schedule" element={<Navigate to="/contact#schedule" replace />} />
      <Route path="/charts" element={<ChartsPage />} />
      <Route path="/podcasts" element={<PodcastsPage />} />
      <Route path="/podcasts/:slug" element={<PodcastDetailPage />} />
      <Route path="/hosts" element={<HostsPage />} />
      <Route path="/hosts/:slug" element={<HostDetailPage />} />
      <Route path="/members/:slug" element={<HostDetailPage />} />
      <Route path="/team-members/:slug" element={<HostDetailPage />} />
      <Route path="/videos" element={<Navigate to="/contact#videos" replace />} />
      <Route path="/events" element={<Navigate to="/contact#events" replace />} />
      <Route path="/events/:slug" element={<EventDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/promote" element={<Navigate to="/contact#promote" replace />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
