import { Meta, StoryObj } from "@storybook/react";
import StackedAvatar from "components/molecules/StackedAvatar/stacked-avatar";

const mockDbContributions: DbContribution[] = [
  {
    id: 1,
    commits: "2",
    commit_days: "ES",
    last_commit_time: "1661496920000",
    files_modified: "",
    first_commit_time: "1661436635000",
    host_login: "10kartik",
    email: "kartik@plgworks.com",
    name: "10kartik",
    langs: "markdown,python",
    recent_pr_total: 30,
    recent_repo_list: "",
    recent_contribution_count: 2,
    recent_opened_prs: 5,
    recent_pr_reviews: 12,
    recent_pr_velocity: 10,
    recent_merged_prs: 20,
  },
  {
    id: 2,
    commits: "2",
    commit_days: "ES",
    last_commit_time: "1661496920000",
    files_modified: "",
    first_commit_time: "1661436635000",
    host_login: "10kartik",
    email: "kartik@plgworks.com",
    name: "10kartik",
    langs: "markdown,python",
    recent_pr_total: 30,
    recent_repo_list: "",
    recent_contribution_count: 2,
    recent_opened_prs: 5,
    recent_pr_reviews: 12,
    recent_pr_velocity: 10,
    recent_merged_prs: 20,
  },
  {
    id: 3,
    commits: "2",
    commit_days: "ES",
    last_commit_time: "1661496920000",
    files_modified: "",
    first_commit_time: "1661436635000",
    host_login: "10kartik",
    email: "kartik@plgworks.com",
    name: "10kartik",
    langs: "markdown,python",
    recent_pr_total: 30,
    recent_repo_list: "",
    recent_contribution_count: 2,
    recent_opened_prs: 5,
    recent_pr_reviews: 12,
    recent_pr_velocity: 10,
    recent_merged_prs: 20,
  },
  {
    id: 4,
    commits: "2",
    commit_days: "ES",
    last_commit_time: "1661496920000",
    files_modified: "",
    first_commit_time: "1661436635000",
    host_login: "10kartik",
    email: "kartik@plgworks.com",
    name: "10kartik",
    langs: "markdown,python",
    recent_pr_total: 30,
    recent_repo_list: "",
    recent_contribution_count: 2,
    recent_opened_prs: 5,
    recent_pr_reviews: 12,
    recent_pr_velocity: 10,
    recent_merged_prs: 20,
  },
];

const storyConfig = {
  title: "Design System/Molecules/Stacked Avatar",
  component: StackedAvatar,
} satisfies Meta<typeof StackedAvatar>;
export default storyConfig;

type Story = StoryObj<typeof StackedAvatar>;

export const Default: Story = {
  args: {
    contributors: mockDbContributions,
  },
};
