import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { EpisodeStatsService } from '../api/episode-stats-service';
import Card from './ui/Card';

export class EpisodesChart extends Component {
  render() {
    const stats = new EpisodeStatsService();
    const statValues = stats.getTimeSeries(this.props.podcast.episodes);

    return (
      <Card title="Aylık dinlenme istatistiği">
        <ResponsiveContainer height={320}>
          <BarChart data={statValues}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="month" />
            <Tooltip />
            <Bar barSize={20} dataKey="listens" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}

export default EpisodesChart;
